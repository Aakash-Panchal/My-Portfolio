import { useEffect, useRef } from "react";
import LocomotiveScroll, {
  LocomotiveScrollOptions,
  Scroll,
} from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

type UseLocomotiveScrollHook = [React.RefObject<Scroll>];

type Props = {
  ref: React.RefObject<Element>;
} & Omit<LocomotiveScrollOptions, "el">;
const useLocomotiveScroll = ({
  ref,
  ...otherProps
}: Props): UseLocomotiveScrollHook => {
  const locomotiveScrollRef = useRef<Scroll | null>(null);

  useEffect(() => {
    if (ref.current) {
      locomotiveScrollRef.current = new LocomotiveScroll({
        ...otherProps,
        el: ref.current,
      });
      new ResizeObserver(() => locomotiveScrollRef.current.update()).observe(
        ref.current
      );
    }
    return () => {
      locomotiveScrollRef.current?.destroy();
    };
  }, [ref, otherProps]);
  return [locomotiveScrollRef];
};
export default useLocomotiveScroll;
