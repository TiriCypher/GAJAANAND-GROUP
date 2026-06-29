import { BrowserRouter, Routes, Route } from "react-router-dom";

import PublicLayout from "../layouts/PublicLayout";

import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Services from "../pages/Services/Services";
import Contact from "../pages/Contact/Contact";
import Blog from "../pages/Blog/Blog";
import FAQ from "../pages/FAQ/FAQ";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import PropertyDetails from "../pages/Properties/PropertyDetails";
import NotFound from "../pages/NotFound/NotFound";
import PropertiesPage from "../pages/Properties"; // index.jsx auto loads
import Profile from "../pages/Profile/Profile";
import ProtectedRoute from "../components/auth/ProtectedRoute";
import AdminRoute from "../components/auth/AdminRoute";

import AdminLayout from "../admin/layouts/AdminLayout";

import Dashboard from "../admin/pages/Dashboard";
import Properties from "../admin/pages/Properties";
import Users from "../admin/pages/Users";
import Leads from "../admin/pages/Leads";
import Inquiries from "../admin/pages/Inquiries";
import AddProperty from "../admin/pages/AddProperty";
import EditProperty from "../admin/pages/EditProperty";
import Settings from "../admin/pages/Settings";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/properties" element={<PropertiesPage />} />
          <Route path="/properties/:id" element={<PropertyDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
        </Route>

        <Route
          path="/admin"
          element={
            <AdminRoute>
              <AdminLayout />
            </AdminRoute>
          }
        >
          <Route index element={<Dashboard />} />

          <Route
            path="properties"
            element={<Properties />}
          />

          <Route
            path="properties/add"
            element={<AddProperty />}
          />

          <Route
            path="properties/edit/:id"
            element={<EditProperty />}
          />

          <Route
            path="users"
            element={<Users />}
          />

          <Route
            path="leads"
            element={<Leads />}
          />

          <Route
            path="inquiries"
            element={<Inquiries />}
          />

          <Route
            path="settings"
            element={<Settings />}
          />
        </Route>



        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;