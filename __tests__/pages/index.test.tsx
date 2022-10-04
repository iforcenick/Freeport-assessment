import { render, screen, fireEvent } from "@testing-library/react";
import Home from "pages/index";
import "@testing-library/jest-dom";
import {data as ArtData} from '../../data/art.json';

describe("Home", () => {
  it("renders a heading", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", {
      name: /example app/i,
    });

    expect(heading).toBeInTheDocument();
  });

  it("shows the full list of arts", () => {
    render(<Home />);``

    const fullList = screen.getByTestId("full-list")

    expect(fullList.children.length).toEqual(4)
    ArtData.forEach(element => {
      Object.values(element).forEach(value => expect(screen.getByTestId(`full-${0}`)).toBeInTheDocument());
    });
  });
  it("filter works correctly.", () => {
    render(<Home />);

    const form = screen.getByTestId("search-form")
    const search = screen.getByTestId("search")
    fireEvent.change(search, { target: { value: "low" } })
    fireEvent.submit(form)

    const filteredList = screen.getByTestId("filtered-list")

    expect(filteredList.children.length).toEqual(1)
    ArtData.forEach(element => {
      Object.values(element).forEach(value => expect(screen.getByTestId(`filtered-${0}`)).toBeInTheDocument());
    });
  });
});