import { Link } from "react-router-dom"

const Test = () => {
  const [posts] = useState([
    { no: 19, type: '일반', title: 'ffff' },
    { no: 18, type: '일반', title: 'ㄱㄱㄱㄱㄱ' },
    { no: 17, type: '일반', title: 'cccccc' },
    { no: 16, type: '일반', title: 'ddddd' },
    { no: 15, type: '일반', title: 'ffffff' },
    { no: 14, type: '일반', title: 'ㅕㅕㅕㅕ' },
    { no: 13, type: '일반', title: 'ffffff' },
    { no: 12, type: '익명', title: 'ffff' },
    { no: 11, type: 'Q&A', title: 'ggggg' },
    { no: 10, type: '익명', title: 'test' }
  ]);

  const [filters, setFilters] = useState({
    전체: true,
    일반: false,
    'Q&A': false,
    익명: false
  });

  const handleFilterChange = (filterType) => {
    if (filterType === '전체') {
      setFilters({
        전체: true,
        일반: false,
        'Q&A': false,
        익명: false
      });
    } else {
      setFilters(prev => ({
        ...prev,
        전체: false,
        [filterType]: !prev[filterType]
      }));
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4 bg-white">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex gap-2">
          <button className="px-3 py-1 text-sm border border-gray-300 hover:bg-gray-50">
            login
          </button>
          <button className="px-3 py-1 text-sm border border-gray-300 hover:bg-gray-50">
            join
          </button>
        </div>
        <div className="text-sm text-gray-600">
          total : 19
        </div>
      </div>

      {/* Table */}
      <div className="border border-gray-300">
        {/* Table Header */}
        <div className="bg-gray-100 border-b border-gray-300 flex">
          <div className="w-16 px-3 py-2 border-r border-gray-300 text-center font-medium text-sm">
            Type
          </div>
          <div className="w-12 px-3 py-2 border-r border-gray-300 text-center font-medium text-sm">
            No
          </div>
          <div className="flex-1 px-3 py-2 font-medium text-sm">
            Title
          </div>
        </div>

        {/* Table Body */}
        {posts.map((post, index) => (
          <div key={post.no} className="border-b border-gray-300 flex hover:bg-gray-50">
            <div className="w-16 px-3 py-2 border-r border-gray-300 text-center text-sm">
              {post.type}
            </div>
            <div className="w-12 px-3 py-2 border-r border-gray-300 text-center text-sm">
              {post.no}
            </div>
            <div className="flex-1 px-3 py-2 text-sm">
              {post.title}
            </div>
          </div>
        ))}
      </div>

      {/* Footer Controls */}
      <div className="mt-4 flex justify-between items-center">
        <div className="flex gap-4 text-sm">
          <label className="flex items-center gap-1 cursor-pointer">
            <input
              type="checkbox"
              checked={filters.전체}
              onChange={() => handleFilterChange('전체')}
              className="w-4 h-4"
            />
            <span>전체</span>
          </label>
          <label className="flex items-center gap-1 cursor-pointer">
            <input
              type="checkbox"
              checked={filters.일반}
              onChange={() => handleFilterChange('일반')}
              className="w-4 h-4"
            />
            <span>일반</span>
          </label>
          <label className="flex items-center gap-1 cursor-pointer">
            <input
              type="checkbox"
              checked={filters['Q&A']}
              onChange={() => handleFilterChange('Q&A')}
              className="w-4 h-4"
            />
            <span>Q&A</span>
          </label>
          <label className="flex items-center gap-1 cursor-pointer">
            <input
              type="checkbox"
              checked={filters.익명}
              onChange={() => handleFilterChange('익명')}
              className="w-4 h-4"
            />
            <span>익명</span>
          </label>
          <button className="px-2 py-1 text-xs bg-gray-100 border border-gray-300 hover:bg-gray-200">
            적용
          </button>
          <button className="px-2 py-1 text-xs bg-gray-100 border border-gray-300 hover:bg-gray-200">
            초기
          </button>
        </div>
        
        <div className="text-sm text-gray-600">
          1 2
        </div>
      </div>
    </div>
  );
};

export default Test