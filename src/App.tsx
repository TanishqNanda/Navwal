import { Footer } from "./components/layout/Footer"
import { Navbar } from "./components/layout/Navbar"
import { Hero } from "./components/sections/Hero"
import { ProblemSection , MoneyProblemSection } from "./components/sections/Problem"
import { BookService } from "./components/sections/BookService"

export default function App(){
    return(
        <>       
            <Navbar/>
            <main className="pt-20">
            <Hero/>
            <ProblemSection/>
            <MoneyProblemSection/>
            <BookService/>
            </main>
            <Footer/>
        </>
    )    
}