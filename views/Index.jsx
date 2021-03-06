const React = require('react');



class Index extends React.Component {    

    render() {
        const todosArr = [];
        const { lists } = this.props;
        



        if(todosArr.length === 0){
            <h3> There are no Todos Yet!</h3>
        }

        return (
            <>
                <div class="containerr">
                         
                            <h1 class="indexheader">ToDo List</h1>
                            <form action="/lists" method="POST">   
                                <input type="text" name="todotext"/>
                                <input type="submit" name=""  value="Create List"/>
                                <button></button>

                            </form>
                               
                        
                            <hr/>
<ul>
                            {
                                
                                lists.map((list)=>{
                                    return(
                                       
                                        <>
                                        <p class="listitem"><br/>
                                            {list.todotext}<br></br>                                 
                                        </p> <br/>
                                        <form action={`/lists/${list._id}?_method=DELETE`} method="POST">
                                                <input type="submit" value="Delete"/>
                                        </form>
                                        </>
                                    )
                                })
                                
                            }
</ul>
                             {
                        
    }

                        <div>
                            
                                   
                                       
                                         
                                          
                        </div>
                            
                            

                    
                </div>
           </>
        )
    }
}

module.exports = Index;