const url = "file://" + process.cwd() + "/index.html";

describe("Página Hola Mundo", () => {
  beforeAll(async () => {
    await page.goto(url);
  });

  it("Debe contener el texto '¡Hola Mundo!'", async () => {
    const contenido = await page.$eval("h1", (el) => el.textContent);
    expect(contenido).toBe("¡Hola Mundo!");
  });
});
