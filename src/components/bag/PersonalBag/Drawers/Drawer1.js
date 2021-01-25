// import React from "react";
// import Drawer from "react-bottom-drawer";
// import "../Styles.css";
// // import DrawerContent from "./DrawerContent";
// import RecommendedBag1 from '../RecommendedBags/RecommendedBag1'
// import { observer, inject } from 'mobx-react'

// const Drawer1 = inject('UserStore')(observer(props => {
//   const arr = ['pants','jeans','trousers']
//   const likeList = props.UserStore.likedItems
//   const userItems = props.UserStore.userItems
//   const recItems = []
//   for (const item of userItems) {
//     for (const liked of likeList) {
//       if(item.type.includes(arr)){
//         if (liked.color === item.color && liked.brand === item.brand){
//             if(!recItems.includes(item.id)){
//               recItems.push(item)
//             }
//           }
//         }
//       }
//     }

//   const [isVisible, setIsVisible] = React.useState(false);
//   const openDrawer = React.useCallback(() => setIsVisible(true), []);
//   const closeDrawer = React.useCallback(() => setIsVisible(false), []);
//   return (
//     <div className="Drawer1">
//       <center>
//         <div className="open-btn" onClick={openDrawer}>
//           {recItems.splice(0,4).map(i =>
//             <img class="img" src={i.image} alt={i.id} />
//           )}
//         </div>
//       </center>
//       <Drawer
//         duration={250}
//         hideScrollbars={true}
//         onClose={closeDrawer}
//         isVisible={isVisible}
//         percentPosition={true}
//       >
//         <RecommendedBag1 />
//       </Drawer>
//     </div>
//   )
// }))

// export default Drawer1