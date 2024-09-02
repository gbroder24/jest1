
/**
 * @jest-environment jsdom
 */

const buttonClick = require("../button")

beforeEach( () => {
    document.body.innerHTML = `<p id="par"></p>`
} );

describe("Dom tests", () => {
    test("expects p content to change", () => {
        buttonClick();
        expect(document.getElementById("par").innerHTML).toEqual("You clicked");
    });
});