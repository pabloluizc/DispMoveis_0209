import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'

const App = () => {    
    return {
        <div ClassName="container border mt-2"> //tenho uma div com a classe container e com a classe border e com a classe margin top 2
            <div ClassName="row border-bottom"> 
                { /* h1.display-5 text-center{Seus pedidos} */ }
                <h1 ClassName="display-5 text-center">Seus Pedidos</h1>            
            </div>
            {/* .row */}
            <div ClassName="row">
                <div className="col-sm-8 col md-6">
                    {/* cartão do bootstrap */}
                    <div className="card">
                        {/* <div className="card-header text-muted">22/04/21</div>*/}
                        
                    </div>
                </div>
            </div>
        </div>
    }     
}

    ReactDOM.render(    
    <App />,    
    document.querySelector('#root')
    )