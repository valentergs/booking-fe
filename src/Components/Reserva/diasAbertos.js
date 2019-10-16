import { isWeekend, addDays, format } from "date-fns";
import pt from "date-fns/locale/pt-BR";

const hoje = new Date();
const formato = "E', 'd'/'LLL";
const idioma = { locale: pt };
const dias = [];
const diasAbertos = [];
const feriados_nac_19 = [
  format(new Date("2019/11/15"), formato, idioma),
  format(new Date("2019/11/02"), formato, idioma),
  format(new Date("2019/12/24"), formato, idioma),
  format(new Date("2019/12/25"), formato, idioma),
  format(new Date("2019/12/30"), formato, idioma),
  format(new Date("2019/12/31"), formato, idioma)
];
const feriados_nac_20 = [
  format(new Date("2020/01/01"), formato, idioma),
  format(new Date("2020/02/25"), formato, idioma),
  format(new Date("2020/02/26"), formato, idioma),
  format(new Date("2020/04/10"), formato, idioma),
  format(new Date("2020/04/21"), formato, idioma),
  format(new Date("2020/05/01"), formato, idioma)
];

for (var i = 0; i < 20; i++) {
  var data = addDays(hoje, i);

  var finalDeSemana = isWeekend(data);

  if (finalDeSemana === false) {
    dias.push(format(data, formato, idioma));
  }
}

dias.map(x => {
  if (
    feriados_nac_19.includes(x) === false &&
    feriados_nac_20.includes(x) === false
  ) {
    diasAbertos.push(x);
  }
});

//console.log(foo);
console.log(diasAbertos);

const ThirdComp = () => {
  return (
    <div>
      {diasAbertos.map(res => (
        <h3 key={res}>{res}</h3>
      ))}
    </div>
  );
};
