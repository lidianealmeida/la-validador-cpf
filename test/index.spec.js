const chai = require ("chai");
const expect = chai.expect;
const indexCpf = require("../index.js");
const cpf = indexCpf.cpfValidator;

describe ("retornar o primeiro digito como resultado da conta", () => {
    it ("retornar 4", () => {
        expect (cpf("87259688742")).to.equal(true)
    })
})

describe ("retornar o segundo digito como resultado da conta", () => {
    it ("retornar 2", () => {
        expect (cpf("87259688742")).to.equal(true)
    })
})

describe ("cpfValidator()", () => {
    it ("cpfValidator()", () => {
        expect (cpf("35394473 54")).to.equal(false)})
    it ("cpfValidator()", () => {
        expect (cpf("3539447354")).to.equal(false)})
    it ("cpfValidator()", () => {
        expect (cpf("35394.73854")).to.equal(false)})
    it ("cpfValidator()", () => {
        expect (cpf("33539447@85!")).to.equal(false)})
    it ("cpfValidator()", () => {
        expect (cpf("00000000000")).to.equal(false)})
    it ("cpfValidator()", () => {
        expect (cpf("45390022300")).to.equal(false)})
    it ("cpfValidator()", () => {
        expect (cpf("4539002230000")).to.equal(false)})
    })

describe ("cpfValidator()", () => {
    it ("retornar cartâo válido", () => {
        expect (cpf("39784483866")).to.equal(true)})
    it ("retornar cartâo inválido", () => {
        expect (cpf("872.596.887-42")).to.equal(false)})
    it ("retornar cartâo inválido", () => {
        expect (cpf("35394000054")).to.equal(false)})
    })