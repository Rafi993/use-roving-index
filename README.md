# use-roving-focus

Hook to implement roving focus in react. Here is article explaning this https://dev.to/rafi993/roving-focus-in-react-with-custom-hooks-1ln

## usage

```
$ npm i use-roving-focus
```

### In your list item

```javascript
import React from "react";

import Item from "./Item";
import useRovingFocus from "use-roving-focus";
import characters from "./onePunchManCharacters";

const List = () => {
  const [focus, setFocus] = useRovingFocus(characters.length);

  return (
    <ul>
      {characters.map((character, index) => (
        <Item
          key={character}
          setFocus={setFocus}
          index={index}
          focus={focus === index}
          character={character}
        />
      ))}
    </ul>
  );
};

export default List;
```

### In your list item

```javascript
import React, { useEffect, useRef, useCallback } from "react";

const Item = ({ character, focus, index, setFocus }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (focus) {
      // Move element into view when it is focused
      ref.current.focus();
    }
  }, [focus]);

  const handleSelect = useCallback(() => {
    alert(`${character}`);
    // setting focus to that element when it is selected
    setFocus(index);
  }, [character, index, setFocus]);

  return (
    <li
      tabIndex={focus ? 0 : -1}
      role="button"
      ref={ref}
      onClick={handleSelect}
      onKeyPress={handleSelect}
    >
      {character}
    </li>
  );
};

export default Item;
```
