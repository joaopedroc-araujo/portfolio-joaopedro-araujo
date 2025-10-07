from playwright.sync_api import sync_playwright, expect

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    context = browser.new_context()
    page = context.new_page()

    try:
        # 1. Arrange: Go to the application's homepage.
        page.goto("http://localhost:5173/")

        # 2. Wait for a key element to be visible to ensure the page is loaded.
        # I'll wait for the "Habilidades" heading.
        expect(page.get_by_role("heading", name="Habilidades")).to_be_visible(timeout=10000)

        # 3. Screenshot: Capture the final result for visual verification.
        page.screenshot(path="jules-scratch/verification/verification.png")

        print("Screenshot taken successfully.")
    except Exception as e:
        print(f"An error occurred: {e}")
    finally:
        browser.close()

with sync_playwright() as playwright:
    run(playwright)