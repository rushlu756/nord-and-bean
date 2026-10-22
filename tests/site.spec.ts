import { test, expect } from "@playwright/test";
test.use({
  launchOptions: {
    executablePath:
      "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  },
});
for (const width of [360, 390, 768, 1024, 1440])
  test(`pages and images at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    const errors = [];
    page.on("pageerror", (e) => errors.push(e.message));
    for (const path of ["/", "/menu", "/about", "/contact"]) {
      await page.goto("http://127.0.0.1:5173" + path);
      await expect(page.locator("h1")).toBeVisible();
      await expect(page.locator("footer")).toBeVisible();
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth,
        ),
      ).toBe(true);
      await page.locator("img").evaluateAll(async (imgs) => {
        await Promise.all(
          imgs.map((i) => {
            i.loading = "eager";
            return i.decode();
          }),
        );
      });
      expect(
        await page
          .locator("img")
          .evaluateAll((imgs) => imgs.every((i) => i.naturalWidth > 0)),
      ).toBe(true);
    }
    expect(errors).toEqual([]);
  });
test("menu filtering and navigation", async ({ page }) => {
  await page.goto("http://127.0.0.1:5173");
  await page.getByRole("link", { name: "Explore Our Menu" }).click();
  await expect(page.locator(".product-card")).toHaveCount(15);
  for (const category of ["Coffee", "Cold Drinks", "Pastries"]) {
    await page.getByRole("button", { name: category, exact: true }).click();
    await expect(page.locator(".product-card")).toHaveCount(5);
    await expect(
      page.getByRole("button", { name: category, exact: true }),
    ).toHaveAttribute("aria-pressed", "true");
  }
  await page.getByRole("button", { name: "All", exact: true }).click();
  await expect(page.locator(".product-card")).toHaveCount(15);
  await page.setViewportSize({ width: 390, height: 844 });
  await page.getByRole("button", { name: "Open menu", exact: true }).click();
  await expect(page.getByRole("navigation")).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(
    page.getByRole("button", { name: "Open menu", exact: true }),
  ).toBeFocused();
  await page.getByRole("button", { name: "Open menu", exact: true }).click();
  await page
    .getByRole("navigation")
    .getByRole("link", { name: "About Us" })
    .click();
  await expect(page).toHaveURL(/about$/);
  await expect(
    page.getByRole("button", { name: "Open menu", exact: true }),
  ).toHaveAttribute("aria-expanded", "false");
});
test("demo form validates and never posts", async ({ page }) => {
  const posts = [];
  page.on("request", (r) => {
    if (r.method() === "POST") posts.push(r.url());
  });
  await page.goto("http://127.0.0.1:5173/contact");
  await page.getByRole("button", { name: "Send Message" }).click();
  await expect(page.getByText("Please enter your full name.")).toBeVisible();
  await expect(page.getByLabel("Full Name")).toBeFocused();
  await page.getByLabel("Full Name").fill("Test Visitor");
  await page.getByLabel("Email Address").fill("invalid");
  await page.getByLabel("Message (required)", { exact: true }).fill("Hello");
  await page.getByRole("button", { name: "Send Message" }).click();
  await expect(
    page.getByText("Please enter a valid email address."),
  ).toBeVisible();
  await page.getByLabel("Email Address").fill("visitor@example.com");
  await page.getByRole("button", { name: "Send Message" }).click();
  await expect(page.getByRole("status")).toContainText(
    "no message was actually sent",
  );
  await expect(page.getByLabel("Full Name")).toHaveValue("");
  expect(posts).toEqual([]);
});
test("reduced motion", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("http://127.0.0.1:5173");
  expect(await page.locator(".reveal-pending").count()).toBe(0);
});
