
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from "./contexts/AppContext";
import Index from "./pages/Index";
import Onboarding from "./pages/Onboarding";
import SubjectSelection from "./pages/SubjectSelection";
import ChapterSelection from "./pages/ChapterSelection";
import StudyModeSelection from "./pages/StudyModeSelection";
import Notes from "./pages/Notes";
import Slides from "./pages/Slides";
import Quiz from "./pages/Quiz";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AppProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/onboarding" element={<Onboarding />} />
            <Route path="/subjects" element={<SubjectSelection />} />
            <Route path="/chapters" element={<ChapterSelection />} />
            <Route path="/study-mode" element={<StudyModeSelection />} />
            <Route path="/notes" element={<Notes />} />
            <Route path="/slides" element={<Slides />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AppProvider>
  </QueryClientProvider>
);

export default App;
