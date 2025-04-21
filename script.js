"use strict";

document.addEventListener("DOMContentLoaded", (event) => {
    event.preventDefault();

    const olhos = [...document.querySelectorAll(".eye")];

    // Prática para pegar a coordenada do mouse
    window.addEventListener("mousemove", (event) => {
        olhos.forEach((olho) => {
            const pupila = olho.querySelector(".pupil");

            const posicaoOlho = olho.getBoundingClientRect(); // Pega a posição do olho na tela
            
            const centerX = posicaoOlho.left + posicaoOlho.width / 2;
            const centerY = posicaoOlho.top + posicaoOlho.height / 2;

            const positionX = event.clientX - centerX;
            const positionY = event.clientY - centerY;

            const rotacao = Math.atan2(positionY, positionX);

            const radianosMaximo = 30; // Distância máxima que a pupila pode se mover

            const pupilaX = Math.cos(rotacao) * radianosMaximo;
            const pupilaY = Math.sin(rotacao) * radianosMaximo;

            // Movendo a pupila
            pupila.style.left = `${35 + pupilaX / 5}px`;
            pupila.style.top = `${35 + pupilaY / 5}px`;
        });
    });
});