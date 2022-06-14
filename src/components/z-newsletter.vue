<template>
    <div class="col-md ps-xl-5 mb-3 mb-md-0">
        <h5 class="fw-light mb-4 mb-md-0">
        Prihláste sa do nášho newslettra a budete mať
        <br>
        <span class="fw-bold">
            čerstvé informácie o živote v OpenLabe.
        </span>
        </h5>
    </div>
    <div class="col-md">
        <span class="newsletter-span position-relative">
        <input type="text" id="lname" name="lname" placeholder="Sem napíš tvoj e-mail" class="border-0 rounded">
        <img src="@/assets/images/send.svg" alt="send" class="send-svg position-absolute">
        </span>
    </div>
</template>

<style>
.newsletter {
    background-color: #d7eaff
}

.newsletter-span input {
    width: 100%;
    height: 40px;
    padding-left: 20px;
    padding-right: 60px;
}

.newsletter-span input:focus {
    outline: none;
}

.send-svg {
    top: 10%;
    right: 25px;
}
</style>