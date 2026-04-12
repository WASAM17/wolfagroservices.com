import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Export from "./pages/Export";
import Quality from "./pages/Quality";
import Impact from "./pages/Impact";
import Gallery from "./pages/Gallery";
import ContactPage from "./pages/ContactPage";
import RFQ from "./pages/RFQ";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";
import ErrorBoundary from "./ErrorBoundary";
import { Suspense } from "react";
import { LanguageProvider } from "./i18n";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { retry: 1, refetchOnWindowFocus: false },
  },
});

const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="w-6 h-6 border-2 border-wolf-green border-t-transparent rounded-full animate-spin" />
  </div>
);

const App = () => (
  <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <LanguageProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              {/* Home */}
              <Route path="/" element={<ErrorBoundary><Index /></ErrorBoundary>} />

              {/* Main pages */}
              <Route path="/about" element={<ErrorBoundary><About /></ErrorBoundary>} />
              <Route path="/produits" element={<ErrorBoundary><Products /></ErrorBoundary>} />
              <Route path="/produits/:slug" element={<ErrorBoundary><ProductDetail /></ErrorBoundary>} />
              <Route path="/export" element={<ErrorBoundary><Export /></ErrorBoundary>} />
              <Route path="/qualite" element={<ErrorBoundary><Quality /></ErrorBoundary>} />
              <Route path="/impact" element={<ErrorBoundary><Impact /></ErrorBoundary>} />
              <Route path="/galerie" element={<ErrorBoundary><Gallery /></ErrorBoundary>} />
              <Route path="/contact" element={<ErrorBoundary><ContactPage /></ErrorBoundary>} />
              <Route path="/demande-offre" element={<ErrorBoundary><RFQ /></ErrorBoundary>} />

              {/* Legacy product route – handled inside ProductDetail via useParams */}
              <Route path="/product/:id" element={<ErrorBoundary><ProductDetail /></ErrorBoundary>} />

              {/* Admin */}
              <Route path="/admin" element={<ErrorBoundary><Admin /></ErrorBoundary>} />

              {/* 404 */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
        </LanguageProvider>
        <Toaster />
        <Sonner />
      </TooltipProvider>
    </QueryClientProvider>
  </ErrorBoundary>
);

export default App;
