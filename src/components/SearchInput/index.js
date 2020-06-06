/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useDebouncedCallback } from "use-debounce";
import { InputGroup, InputGroupAddon, Input, Button } from "reactstrap";
// actions
import { searchHeroByName } from "../../reducers_and_actions/justiceRoom";

const SearchInput = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const [debouncedCallback] = useDebouncedCallback((value) => {
    value = value || "A";
    dispatch(searchHeroByName(value));
  }, 1000);

  return (
    <InputGroup className="pt-6">
      <InputGroupAddon addonType="prepend">🦸🏾‍♂️</InputGroupAddon>
      <Input
        placeholder="Pesquise seus heróis aqui..."
        value={query}
        onChange={(e) => {
          const { value } = e.target;
          setQuery(value);
          debouncedCallback(value);
        }}
      />
      <InputGroupAddon addonType="append">
        <Button
          onClick={() => {
            setQuery("");
            debouncedCallback("");
          }}
          color="secondary"
        >
          x
        </Button>
      </InputGroupAddon>
    </InputGroup>
  );
};

export default SearchInput;
