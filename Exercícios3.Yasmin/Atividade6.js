const prompt = require('prompt-sync')();

let MonitoramentoTurbina = {
    Posição: ['Motor direito'],
    StatusFuncionamento: true,
    TemperaturaCelsius: [],
    PSI: [],
    CombustívelPorcentagem: []
}

let TemperaturaAtual = Number(prompt("Qual a temperatura atual da Turbina? "))
MonitoramentoTurbina.TemperaturaCelsius.push(TemperaturaAtual)

let PressãoPSI = Number(prompt("Qual a pressão atual do PSI? "))
MonitoramentoTurbina.PSI.push(PressãoPSI)

let Combustível = Number(prompt("Qual a porentagem atual do combustível? "))
MonitoramentoTurbina.CombustívelPorcentagem.push(Combustível)

if (MonitoramentoTurbina.CombustívelPorcentagem > 20 && MonitoramentoTurbina.PSI > 50 && MonitoramentoTurbina.TemperaturaCelsius > 20 && MonitoramentoTurbina.TemperaturaCelsius < 90) {
    console.log(MonitoramentoTurbina)
} else {
    console.log("Falha Crítica")
    MonitoramentoTurbina.StatusFuncionamento = ! MonitoramentoTurbina.StatusFuncionamento
    console.log(MonitoramentoTurbina)
}