import BookInfo from './BookInfo';
import BooksList from './BooksList';

function App() {
  return (
   <main className="book-container">
     <BooksList/>
     <BookInfo />
   </main>
  );
}

export default App;
