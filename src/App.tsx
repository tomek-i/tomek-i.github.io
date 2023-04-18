import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./layouts/default";
import { WarburnEstatePage } from "./pages/CaseStudies/warburn-estate";
import { HomePage } from "./pages/home";
import { FourmationPage } from "./pages/CaseStudies/4mation";
import { BusinessActsPage } from "./pages/CaseStudies/business-acts";
import { VeritechPage } from "./pages/CaseStudies/veritech";
import { GapYearPage } from "./pages/CaseStudies/gap-year";
import { BundeswehrPage } from "./pages/CaseStudies/bundeswehr";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="case-studies/">
              <Route path="4mation" element={<FourmationPage />} />
              <Route path="warburn-estate" element={<WarburnEstatePage />} />
              <Route path="veritech" element={<VeritechPage />} />
              <Route path="gap-year" element={<GapYearPage />} />
              <Route path="business-acts" element={<BusinessActsPage />} />
              <Route path="bundeswehr" element={<BundeswehrPage />} />
            </Route>
            <Route path="*" element={<div> Ooops 404 </div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
