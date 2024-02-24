import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Contact from "./Contact";
import EditContact from "./Edit";
import ErrorPage from "./Error";
import Index from "./Index";
import Root from "./Root";
import {
  createContactAction,
  deleteContactAction,
  editContactAction,
  updateContactFavoriteActoin,
} from "./actions/contactActions";
import "./index.css";
import { getContactLoader } from "./loaders/contactLoader";
import { getContactsLoader } from "./loaders/contactsLoader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: getContactsLoader,
    action: createContactAction,
    children: [
      {
        error: <ErrorPage />,
        children: [
          {
            index: true,
            element: <Index />,
          },
          {
            path: "/contacts/:contactId",
            element: <Contact />,
            loader: getContactLoader,
            action: updateContactFavoriteActoin,
            errorElement: <ErrorPage />,
          },
          {
            path: "/contacts/:contactId/edit",
            element: <EditContact />,
            loader: getContactLoader,
            action: editContactAction,
          },

          {
            path: "/contacts/:contactId/destroy",
            action: deleteContactAction,
            errorElement: <div>!! There was a Error !!</div>,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
