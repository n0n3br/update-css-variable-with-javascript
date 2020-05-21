const inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
    input.addEventListener("input", () => {
        document.documentElement.style.setProperty(
            `--${input.name}`,
            `${input.value}${input.dataset.unit || ""}`
        );
    });
});
