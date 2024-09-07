import Book from "./components/BookList/Book";
import './App.css'
function App(){
    return (
        <div className="booklist">
            <Book image='https://images-na.ssl-images-amazon.com/images/I/71KTwO53SnL._AC_UL600_SR600,400_.jpg' title='Good Energy' author='Casey Means' temp='This prop is only provided to this Book'/>
            <Book image='https://images-na.ssl-images-amazon.com/images/I/71PNGYHykrL._AC_UL600_SR600,400_.jpg' title='It Starts with Us' author='Colleen Hoover'/>
            <Book image='https://images-na.ssl-images-amazon.com/images/I/91qcLbAh3pL._AC_UL600_SR600,400_.jpg' title='The Dragons Prophecy' author='Jonathan Cahn'/>
            <Book image='https://images-na.ssl-images-amazon.com/images/I/81O6JfipQhL._AC_UL600_SR600,400_.jpg' title='The Book of Bill' author='Alex Hirsch'/>
            <Book image='https://images-na.ssl-images-amazon.com/images/I/71sOqrd6JHL._AC_UL600_SR600,400_.jpg' title='Mom, I Want to Hear Your Story' author='Jeffrey Mason'/>
            <Book image='https://images-na.ssl-images-amazon.com/images/I/71w27dNcmjL._AC_UL300_SR300,200_.jpg' title='Moving Beyond the COVID-19 Lies' author='Bryan Ardis'/>
        </div>
    );
};
export default App;