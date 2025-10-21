import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import OurQualification from "./pages/OurQualification";
import ProfessionalCareer from "./pages/ProfessionalCareer";
import WhyIAMA from "./pages/WhyIAMA";
import Recognition from "./pages/Recognition";
import WhyChoose from "./pages/student/WhyChoose";
import StudyRoutes from "./pages/student/StudyRoutes";
import Exemptions from "./pages/student/Exemptions";
import Qualification from "./pages/student/Qualification";
import CertificateLevel from "./pages/student/CertificateLevel";
import ManagerialLevel from "./pages/student/ManagerialLevel";
import AdvancedLevel from "./pages/student/AdvancedLevel";
import Syllabus from "./pages/student/Syllabus";
import ExamStructure from "./pages/student/ExamStructure";
import StudyOptions from "./pages/student/StudyOptions";
import Fees from "./pages/student/Fees";
import WhyBecome from "./pages/members/WhyBecome";
import Compliance from "./pages/members/Compliance";
import Benefits from "./pages/members/Benefits";
import CPD from "./pages/CPD";
import FindMember from "./pages/FindMember";
import Apply from "./pages/Apply";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/our-qualification" element={<OurQualification />} />
          <Route path="/professional-career" element={<ProfessionalCareer />} />
          <Route path="/why-iama" element={<WhyIAMA />} />
          <Route path="/recognition" element={<Recognition />} />
          <Route path="/student/why-choose" element={<WhyChoose />} />
          <Route path="/student/study-routes" element={<StudyRoutes />} />
          <Route path="/student/exemptions" element={<Exemptions />} />
          <Route path="/student/qualification" element={<Qualification />} />
          <Route path="/student/certificate-level" element={<CertificateLevel />} />
          <Route path="/student/managerial-level" element={<ManagerialLevel />} />
          <Route path="/student/advanced-level" element={<AdvancedLevel />} />
          <Route path="/student/syllabus" element={<Syllabus />} />
          <Route path="/student/exam-structure" element={<ExamStructure />} />
          <Route path="/student/study-options" element={<StudyOptions />} />
          <Route path="/student/fees" element={<Fees />} />
          <Route path="/members/why-become" element={<WhyBecome />} />
          <Route path="/members/compliance" element={<Compliance />} />
          <Route path="/members/benefits" element={<Benefits />} />
          <Route path="/cpd" element={<CPD />} />
          <Route path="/find-member" element={<FindMember />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
