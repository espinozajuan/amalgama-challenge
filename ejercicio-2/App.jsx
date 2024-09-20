import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setBooks } from './booksSlice';
import { setUsers } from './usersSlice';
import { setAuthors } from './authorsSlice';

const fetchBooks = async () => {
  const response = await fetch('https://api.org/books');
  const data = await response.json();
  return data.response;
};

const fetchUsers = async () => {
  const response = await fetch('https://api.org/users');
  const data = await response.json();
  return data.response;
};

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const loadData = async () => {
      const books = await fetchBooks();
      const users = await fetchUsers();

      const authors = books.map((book) => book.author); // Extraer autores de los libros

      // Guardar en Redux
      dispatch(setBooks(books));
      dispatch(setAuthors(authors));
      dispatch(setUsers(users));
    };

    loadData();
  }, [dispatch]);

  return (
    <div>
      <h1>Library App</h1>
      {/* Componentes para renderizar libros, usuarios, etc. */}
    </div>
  );
};

export default App;
