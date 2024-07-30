import React, { useState } from "react";
import { View, Text, TextInput, Button, TouchableOpacity, Vibration, Platform} from "react-native";
import ResultImc from "./ResultImc/index";
import styles from "../Form/style";

export default function Form() {

    const [height, setHeight] = useState(null);
    const [weight, setWeight] = useState(null);
    const [messageImc, setMessageimc] = useState("Preencha o peso e a altura");
    const [imc, setImc] = useState(null);
    const [TextButton, setTextButton] = useState("Calcular");
    const [errorMessage, setErrorMessage] = useState(null);


    function imcCalculator(){
        setImc((weight/(height*height)).toFixed(2))
    }

    function verificarImc(){
        if(imc == null){
           
            Vibration.vibrate();
            setErrorMessage("Campo obrigatório!");
        }
    }

    function validationImc(){
        if(weight != null && height != null){
            imcCalculator()
            setHeight(null)
            setWeight(null)
            setMessageimc("Seu imc é igual a: ")
            setTextButton("Calcular novamente")
            setErrorMessage(null)
        }else{
            setImc(null)
            setTextButton("Calcular")
            setMessageimc("Preencha o peso e a altura!")
            verificarImc()
        }
    }

    return(
        <View style={styles.formContext}>
            <View style={styles.form}>  
            <Text 
            style={styles.formLabel}
            >Altura</Text>
            <Text style={styles.errorMessage}>{errorMessage}</Text>
            <TextInput 
            style={styles.input}
            onChangeText={setHeight}
            value={height}
            placeholder="Ex. 1.75"
            keyboardType="numeric"
            ></TextInput>

            <Text
            style={styles.formLabel}
            >Peso</Text>
            <Text style={styles.errorMessage}>{errorMessage}</Text>
            <TextInput 
            style={styles.input}
            value={weight}
            onChangeText={setWeight}
            placeholder="Ex. 70.5"
            keyboardType="numeric"
            ></TextInput>

            <TouchableOpacity 
            style={styles.buttonCalculator}
            onPress={() => {validationImc()}}
            >
                <Text
                style={styles.textButtonCalculator}
                >
                    {TextButton}
                </Text>
            </TouchableOpacity>
            </View>

            <ResultImc 
            messageResultImc={messageImc}
            ResultImc={imc}>    
            </ResultImc>
        </View>

    )
};

