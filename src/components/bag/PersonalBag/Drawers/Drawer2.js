// import React from "react";
// import Drawer from "react-bottom-drawer";
// import "../Styles.css";
// import RecommendedBag2 from '../RecommendedBags/RecommendedBag2'

// export default function Drawer2() {
//   const [isVisible, setIsVisible] = React.useState(false);
//   const openDrawer = React.useCallback(() => setIsVisible(true), []);
//   const closeDrawer = React.useCallback(() => setIsVisible(false), []);

//   return (
//     <div className="Drawer2">
//       <center>
//         <div className="open-btn" onClick={openDrawer}>
//         <img class='img' alt='img' src="https://images.asos-media.com/products/asos-design-spray-on-jeans-with-power-stretch-in-light-wash-blue/21222765-1-lightwashblue" />
//         <img class='img' alt='img' src="https://images.asos-media.com/products/asos-design-spray-on-jeans-with-power-stretch-in-light-wash-blue/21222765-1-lightwashblue" />
//         <img class='img' alt='img' src="https://images.asos-media.com/products/asos-design-spray-on-jeans-with-power-stretch-in-light-wash-blue/21222765-1-lightwashblue" />
//         <img class='img' alt='img' src="https://images.asos-media.com/products/asos-design-spray-on-jeans-with-power-stretch-in-light-wash-blue/21222765-1-lightwashblue" />

//        </div>
//       </center>
//       <Drawer
//         duration={250}
//         hideScrollbars={true}
//         onClose={closeDrawer}
//         isVisible={isVisible}
//       >
//         <RecommendedBag2 />
//       </Drawer>
//     </div>
//   );
// }
