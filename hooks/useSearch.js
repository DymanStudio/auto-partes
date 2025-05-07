// Custom hook for search and filter functionality
function useSearch() {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [activeCategory, setActiveCategory] = React.useState('Todos');
  const location = ReactRouterDOM.useLocation();
  const navigate = ReactRouterDOM.useNavigate();

  // Initialize search and category from URL on mount
  React.useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const searchQuery = searchParams.get('search') || '';
    const categoryQuery = searchParams.get('category') || 'Todos';

    setSearchTerm(searchQuery);
    setActiveCategory(categoryQuery);
  }, [location.search]);

  // Handle search term change
  const handleSearch = (term) => {
    setSearchTerm(term);
    updateUrlParams(term, activeCategory);
    return term;
  };

  // Handle category change
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    updateUrlParams(searchTerm, category);
    return category;
  };

  // Update URL with search parameters
  const updateUrlParams = (search, category) => {
    const searchParams = new URLSearchParams();

    if (search && search.trim() !== '') {
      searchParams.set('search', search);
    }

    if (category && category !== 'Todos') {
      searchParams.set('category', category);
    }

    const newUrl = `${location.pathname}?${searchParams.toString()}`;
    navigate(newUrl, { replace: true });
  };

  // Clear all search and filter parameters
  const clearAll = () => {
    setSearchTerm('');
    setActiveCategory('Todos');
    navigate(location.pathname);
  };

  return {
    searchTerm,
    activeCategory,
    handleSearch,
    handleCategoryChange,
    clearAll
  };
}