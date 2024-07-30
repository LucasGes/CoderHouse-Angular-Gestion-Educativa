export class AuthMockSerice{

    login(){

        console.log('EJECUTANDO LOGIN FALSO');
        return{
                name: 'Fake User',
                email: '...',
                        };
    }
}