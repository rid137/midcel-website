'use client'

// import { motion } from 'framer-motion'

// export default function Template({ children }: { children: React.ReactNode }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ ease: 'easeInOut', duration: 1 }}
//     >
//       {children}
//     </motion.div>
//   )
// }


import { motion } from 'framer-motion';

const Template = ({ children }: { children: React.ReactNode }) => {
  const pageVariants = {
    initial: {
      opacity: 0,
      y: 50, // Initial position off the screen along the y-axis
    },
    animate: {
      opacity: 1,
      y: 0, // Final position on the screen along the y-axis
    },
    exit: {
      opacity: 0,
      y: -50, // Exit position off the screen along the negative y-axis
    },
  };

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ ease: 'easeInOut', duration: 0.75 }}
    >
      {children}
    </motion.div>
  );
};

export default Template;


// import { motion, useAnimation } from 'framer-motion';
// import { useEffect } from 'react';

// const Spinner = () => (
//   <motion.div
//     style={{
//       width: '50px',
//       height: '50px',
//       border: '4px solid rgba(255, 255, 255, 0.3)',
//       borderTop: '4px solid #ffffff',
//       borderRadius: '50%',
//       boxSizing: 'border-box',
//     }}
//     animate={{ rotate: 360 }}
//     transition={{ loop: Infinity, ease: 'linear', duration: 1 }}
//   />
// );

// const Template = ({ children }: { children: React.ReactNode }) => {
//   const controls = useAnimation();

//   useEffect(() => {
//     controls.start({ opacity: 1 }); // Initial animation when the component mounts
//   }, [controls]);

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={controls}
//       exit={{ opacity: 0 }}
//       transition={{ ease: 'easeInOut', duration: 0.75 }}
//     >
//       <Spinner />
//       {children}
//     </motion.div>
//   );
// };

// export default Template;


// import { motion } from 'framer-motion';
// // import { useEffect } from 'react';

// // const Spinner = () => (
// //   <motion.div
// //     style={{
// //       width: '50px',
// //       height: '50px',
// //       border: '4px solid rgba(255, 255, 255, 0.3)',
// //       borderTop: '4px solid #ffffff',
// //       borderRadius: '50%',
// //       boxSizing: 'border-box',
// //       background: "black"
// //     }}
// //     animate={{ rotate: 360 }}
// //     transition={{ loop: Infinity, ease: 'linear', duration: 1 }}
// //   />
// // );

// const Template = ({ children }: { children: React.ReactNode }) => {
//   // const controls = useAnimation();

//   // useEffect(() => {
//   //   controls.start({ opacity: 1 });
//   // }, [controls]);

//   const pageVariants = {
//     initial: { opacity: 0 },
//     animate: { opacity: 1 },
//     exit: { opacity: 0 },
//   };

//   return (
//     <motion.div
//       variants={pageVariants}
//       initial="initial"
//       animate="animate"
//       exit="exit"
//       transition={{ ease: 'easeInOut', duration: 1 }}
//     >
//       {/* <Spinner /> */}
//       {children}
//     </motion.div>
//   //   <motion.div
//   //   initial={{ x: 300, opacity: 0 }}
//   //   animate={{ x: 0, opacity: 1 }}
//   //   exit={{ x: 300, opacity: 0 }}
//   //   transition={{
//   //     type: "spring",
//   //     stiffness: 260,
//   //     damping: 20,
//   //   }}
//   // >
//   //   {children}
//   // </motion.div>
//   );
// };

// export default Template;

// import { motion } from 'framer-motion';
// import { useEffect, useState } from 'react';

// const Spinner = () => (
//   <motion.div
//     style={{
//       width: '50px',
//       height: '50px',
//       border: '4px solid rgba(255, 255, 255, 0.3)',
//       borderTop: '4px solid #ffffff',
//       borderRadius: '50%',
//       boxSizing: 'border-box',
//       background: 'black',
//     }}
//     animate={{ rotate: 360 }}
//     transition={{ loop: Infinity, ease: 'linear', duration: 1 }}
//   />
// );

// const Template = ({ children }: { children: React.ReactNode }) => {
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     const handleStartLoading = () => {
//       setIsLoading(true);
//     };

//     const handleStopLoading = () => {
//       setIsLoading(false);
//     };

//     // Add event listeners for page transition start and end
//     document.addEventListener('routeChangeStart', handleStartLoading);
//     document.addEventListener('routeChangeComplete', handleStopLoading);
//     document.addEventListener('routeChangeError', handleStopLoading);

//     return () => {
//       // Cleanup event listeners on component unmount
//       document.removeEventListener('routeChangeStart', handleStartLoading);
//       document.removeEventListener('routeChangeComplete', handleStopLoading);
//       document.removeEventListener('routeChangeError', handleStopLoading);
//     };
//   }, []);

//   const pageVariants = {
//     initial: { opacity: 0 },
//     animate: { opacity: 1 },
//     exit: { opacity: 0 },
//   };

//   return (
//     <motion.div
//       variants={pageVariants}
//       initial="initial"
//       animate="animate"
//       exit="exit"
//       transition={{ ease: 'easeInOut', duration: 1 }}
//     >
//       {isLoading && <Spinner />}
//       {children}
//     </motion.div>
//   );
// };

// export default Template;

