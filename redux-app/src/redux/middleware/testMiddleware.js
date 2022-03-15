function testMiddleWare({dispatch,getState}) {
    return (next) => {
        return(action) => {
            console.log('Prv_state',getState());
         next({
             type: 'increment'
         });
         console.log('Next_state',getState());
        }
    }
}
export default testMiddleWare;