import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/login';
import MariaFelipaScreen from '../screens/mariaFelipa';
import HomeScreen from '../screens/home';
import BotaoPanicoScreen from '../screens/botaoPanico';
import CadastroScreen from '../screens/cadastro';
import EsqueceuSenhaScreen from '../screens/esqueceuSenha';

const Stack = createNativeStackNavigator();

function StackNavigator({ onLoginSuccess }) {
    return (
        <Stack.Navigator initialRouteName="MariaFelipa">
            <Stack.Screen
                name="MariaFelipa"
                component={MariaFelipaScreen}
                options={{ headerShown: false }}
            />
              <Stack.Screen
                name="Cadastro"
                component={CadastroScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Login"
                options={{ headerShown: false }}
            >
                {(props) => <LoginScreen {...props} onLoginSuccess={onLoginSuccess} />}
            </Stack.Screen>
            <Stack.Screen
                name="EsqueceuSenha"
                component={EsqueceuSenhaScreen}
                options={{ headerShown: false }}
            />

            <Stack.Screen name='Home' component = {HomeScreen} options={{ headerShown: false }}/>
            <Stack.Screen name='BotaoPanico' component={BotaoPanicoScreen} options={{ headerShown: false }}/>
        </Stack.Navigator>
    );
}

export default StackNavigator;
