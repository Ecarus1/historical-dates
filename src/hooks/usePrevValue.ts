import {useEffect, useRef} from "react";

function usePrevValue<T>(value: T) {
  const ref = useRef<T>();

  useEffect(() => {
    ref.current = value
  });

  return ref.current
}

export default usePrevValue;