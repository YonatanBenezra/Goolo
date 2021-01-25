// import React from "react";
// import Drawer from "react-bottom-drawer";
// import "../Styles.css";
// // import DrawerContent from "./DrawerContent";
// import RecommendedBag4 from '../RecommendedBags/Recommendedbag4'

// export default function Drawer4() {
//   const [isVisible, setIsVisible] = React.useState(false);
//   const openDrawer = React.useCallback(() => setIsVisible(true), []);
//   const closeDrawer = React.useCallback(() => setIsVisible(false), []);

//   return (
//     <div className="Drawer4">
//       <center>
//         <div className="open-btn" onClick={openDrawer}>
//         <img class='img' alt='img' src="https://images.asos-media.com/products/asos-design-spray-on-jeans-with-power-stretch-in-light-wash-blue/21222765-1-lightwashblue" />
//       <img class='img' alt='img' src="https://images.asos-media.com/products/asos-design-spray-on-jeans-with-power-stretch-in-light-wash-blue/21222765-1-lightwashblue" />
//       <img class='img' alt='img' src="https://images.asos-media.com/products/asos-design-spray-on-jeans-with-power-stretch-in-light-wash-blue/21222765-1-lightwashblue" />
//       <img class='img' alt='img' src="https://images.asos-media.com/products/asos-design-spray-on-jeans-with-power-stretch-in-light-wash-blue/21222765-1-lightwashblue" />

//         </div>
//       </center>
//       <Drawer
//         duration={250}
//         hideScrollbars={true}
//         onClose={closeDrawer}
//         isVisible={isVisible}
//       >
//         <RecommendedBag4 />
//       </Drawer>
//     </div>
//   );
// }
