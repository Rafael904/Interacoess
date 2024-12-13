function carregar() {
    let h = window.document.getElementById('ex1')
    let data = new Date()
    let hora = data.getHours()
    h.innerHTML = `<b>Agora são ${hora} horas.</b>`
}
function contar() {
    let inicio = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let passo = document.getElementById('passo')
    let t = document.getElementById('ex2')
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[Erro] Faltam Dados')
    } else {
        inicio = Number(inicio.value)
        fim = Number(fim.value)
        passo = Number(passo.value)
        for (c = inicio; c <= fim; c += passo) {
            t.innerHTML += `\u{1f449}${c}, `
        }

    }
}
function parimp() {
    let n = document.getElementById('par').value
    let res = document.getElementById('ex3')
    if (n % 2 == 0) {
        res.innerHTML = `Esse número é par.`
    } else {
        res.innerHTML = `Esse número é impar.`
    }
}
function somar() {
    let n1 = Number(document.getElementById('n10').value)
    let n2 = Number(document.getElementById('n20').value)
    let n = n1 + n2
    let ex40 = document.getElementById('ex40')
    ex40.innerHTML = `O resultado dessa conta é ${n}.`
}
function subtrair() {
    let n1 = document.getElementById('n11').value
    let n2 = document.getElementById('n21').value
    let n = n1 - n2
    let ex41 = document.getElementById('ex41')
    ex41.innerHTML = `O resultado dessa conta é ${n}.`
}
function multiplicar() {
    let n1 = document.getElementById('n12').value
    let n2 = document.getElementById('n22').value
    let n = n1 * n2
    let ex42 = document.getElementById('ex42')
    ex42.innerHTML = `O resultado dessa conta é ${n}.`
}
function dividir() {
    let n1 = document.getElementById('n13').value
    let n2 = document.getElementById('n23').value
    let n = n1 / n2
    let ex43 = document.getElementById('ex43')
    ex43.innerHTML = `O resultado dessa conta é ${n}.`
}
function baskara(delta, a, b) {
    if (delta > 0) {
        var x = [(-b + Math.sqrt(delta)) / 2 * a];
        x[1] = (-b - Math.sqrt(delta)) / 2 * a;
    } else {
        var x = -b / (2 * a);
    }
    return x;
}
function delta() {
    let a = document.getElementById('a').value;
    let b = document.getElementById('b').value;
    let c = document.getElementById('c').value;
    let delta = b * b - 4 * a * c;
    let ex5 = document.getElementById('ex5');
    if (delta >= 0) {
        let x = baskara(delta, a, b);
        ex5.innerHTML = `X é igual a <b>${x}</b>`;
    }
    if (delta < 0) {
        ex5.innerHTML = `Não foi possivel calcular o valor de X.`;
    }
}
function juros() {
    let p = document.getElementById('p').value;
    let i = document.getElementById('i').value;
    let t = document.getElementById('t').value;
    let Total = p * (1 + i / 100) ** t;
    let ex6 = document.getElementById('ex6');
    ex6.innerHTML = `Em ${t} meses, a uma taxa de ${i}% ao mês, ${p} vam se transformar em <b>${Total}</b>.`
}
