import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

it("upload file", () => {
  const file = new File(["hello"], "hello.png", { type: "image/png" });

  render(
    <div>
      <label htmlFor="file-uploader">Upload file:</label>
      <input id="file-uploader" type="file" />
    </div>
  );
  const input = screen.getByLabelText(/upload file/i);
  userEvent.upload(input, file);

  expect(input.files[0]).toBe(file);
  expect(input.files.item(0)).toBe(file);
  expect(input.files.length).toBe(1);
});
