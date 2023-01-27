import Header from "./Header";
import MenuLeft from "./MenuLeft";

Drawer.propTypes = {};

export function Drawer(props) {
  return (
    <div>
      <MenuLeft />
      <Header />
    </div>
  );
}
