function drawHearts () {
    ctx.font = "24px Arial";
    for (let i = heartParticles.length - 1; i >= 0; i--){
        const heart = heartParticles[i];
        ctx.fillStyle = heart.color;
        ctx.fillText("❤️", heart.x, heart.y);

        heart.x += heart.vx;
        heart.y += heart.vy;
        heart.life--;
        if (heart.life <= 0) heartParticles.splice(i, 1);
    }    
}