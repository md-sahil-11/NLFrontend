import React, { Suspense } from "react";
// import "./assets/css/styles.css";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import routes from "./routes";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <AuthProvider>
          <Routes>
            <>
              {Object.keys(routes).map((key) => (
                <Route
                  key={key}
                  path={routes[key].path}
                  element={routes[key].element}
                />
              ))}
              <Route path='*' element={<NotFound />}/>
            </>
          </Routes>
        </AuthProvider>
      </Suspense>
    </div>
  );
}
