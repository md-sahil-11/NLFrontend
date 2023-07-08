import React, { useState } from "react";
import AppCreateForm from "../../components/Apps/CreateForm";
import useDocumentTitle from "../../hooks/useDocumentTitle";

function AddApp() {
  useDocumentTitle("Add app")
  return <AppCreateForm />
}

export default AddApp;