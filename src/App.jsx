// import { useEffect, useState } from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   useLocation,
// } from "react-router-dom";
// // hh
// import { AnimatePresence, motion } from "framer-motion";

// import Navbar from "./components/Navbar";
// import Loader from "./components/Loader";
// import Cart from "./pages/Cart";
// import Home from "./pages/Home";
// import Books from "./pages/Books";
// import Dlxwazi from "./pages/Dlxwazi";
// import About from "./pages/About";
// import BookDetails from "./pages/BookDetails.jsx";
// import Contact from "./pages/Contact";
// import Nusarakan from "./pages/Nusarakan.jsx";
// import Login from "./pages/login.jsx";
// import SignUp from "./pages/SignUp.jsx"
// // 🎬 Motion Wrapper
// function PageWrapper({ children }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 40 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: -40 }}
//       transition={{ duration: 0.4 }}
//     >
//       {children}
//     </motion.div>
//   );
// }

// // 🔥 App Content (Loader لابراوە لێرە)
// function AppContent() {
//   const location = useLocation();

//   return (
//     <>
//       <Navbar />

//       <div className="md:pt-5 px-4">
//         <AnimatePresence mode="wait">
//           <Routes location={location} key={location.pathname}>
//             <Route
//               path="/"
//               element={
//                 <PageWrapper>
//                   <Home />
//                 </PageWrapper>
//               }
//             />

//             <Route
//               path="/books"
//               element={
//                 <PageWrapper>
//                   <Books />
//                 </PageWrapper>
//               }
//             />

//             <Route
//               path="/Dlxwazi"
//               element={
//                 <PageWrapper>
//                   <Dlxwazi />
//                 </PageWrapper>
//               }
//             />

//             <Route
//               path="/about"
//               element={
//                 <PageWrapper>
//                   <About />
//                 </PageWrapper>
//               }
//             />

//             <Route
//               path="/Nusarakan"
//               element={
//                 <PageWrapper>
//                   <Nusarakan />
//                 </PageWrapper>
//               }
//             />

//             <Route
//               path="/book/:id"
//               element={
//                 <PageWrapper>
//                   <BookDetails />
//                 </PageWrapper>
//               }
//             />

//             <Route
//               path="/contact"
//               element={
//                 <PageWrapper>
//                   <Contact />
//                 </PageWrapper>
//               }
//             />

//             <Route
//               path="/Login"
//               element={
//                 <PageWrapper>
//                   <Login />
//                 </PageWrapper>
//               }
//             />
//             <Route
//               path="/SignUp"
//               element={
//                 <PageWrapper>
//                   <SignUp />
//                 </PageWrapper>
//               }
//             />
//             <Route
//               path="/Cart"
//               element={
//                 <PageWrapper>
//                   <Cart />
//                 </PageWrapper>
//               }
//             />

//             <Route path="*" element={<h1>404 Not Found</h1>} />
//           </Routes>
//         </AnimatePresence>
//       </div>
//     </>
//   );
// }

// // 🔥 Loader تەنها بۆ Refresh
// function App() {
//   const [initialLoading, setInitialLoading] = useState(true);

//   useEffect(() => {
//     const handleLoad = () => {
//       setTimeout(() => {
//         setInitialLoading(false);
//       }, 3500); // کات
//     };

//     if (document.readyState === "complete") {
//       handleLoad();
//     } else {
//       window.addEventListener("load", handleLoad);
//       return () => window.removeEventListener("load", handleLoad);
//     }
//   }, []);

//   return <Router>{initialLoading ? <Loader /> : <AppContent />}</Router>;
// }

// export default App;
import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import { AnimatePresence, motion } from "framer-motion";

import Navbar from "./components/Navbar";
import Loader from "./components/Loader";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Books from "./pages/Books";
import Dlxwazi from "./pages/Dlxwazi";
import About from "./pages/About";
import BookDetails from "./pages/BookDetails.jsx";
import Contact from "./pages/Contact";
import Nusarakan from "./pages/Nusarakan.jsx";
import Login from "./pages/login.jsx";
import SignUp from "./pages/SignUp.jsx";

// 🎬 Motion Wrapper
function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.4 }}
    >
      {children}
    </motion.div>
  );
}

// 🔥 App Content
function AppContent() {
  const location = useLocation();

  return (
    <>
      <Navbar />

      <div className="md:pt-5 px-4">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <PageWrapper>
                  <Home />
                </PageWrapper>
              }
            />
            <Route
              path="/books"
              element={
                <PageWrapper>
                  <Books />
                </PageWrapper>
              }
            />
            <Route
              path="/Dlxwazi"
              element={
                <PageWrapper>
                  <Dlxwazi />
                </PageWrapper>
              }
            />
            <Route
              path="/about"
              element={
                <PageWrapper>
                  <About />
                </PageWrapper>
              }
            />
            <Route
              path="/Nusarakan"
              element={
                <PageWrapper>
                  <Nusarakan />
                </PageWrapper>
              }
            />
            <Route
              path="/book/:id"
              element={
                <PageWrapper>
                  <BookDetails />
                </PageWrapper>
              }
            />
            <Route
              path="/contact"
              element={
                <PageWrapper>
                  <Contact />
                </PageWrapper>
              }
            />
            <Route
              path="/Login"
              element={
                <PageWrapper>
                  <Login />
                </PageWrapper>
              }
            />
            <Route
              path="/SignUp"
              element={
                <PageWrapper>
                  <SignUp />
                </PageWrapper>
              }
            />
            <Route
              path="/Cart"
              element={
                <PageWrapper>
                  <Cart />
                </PageWrapper>
              }
            />
            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Routes>
        </AnimatePresence>
      </div>
    </>
  );
}

// 🔥 Loader only on first load
function App() {
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setInitialLoading(false);
      }, 3500);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);
  return <Router>{initialLoading ? <Loader /> : <AppContent />}</Router>;
}
// هەلۆ
export default App;

