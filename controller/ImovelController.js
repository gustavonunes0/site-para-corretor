import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

module.exports = {
    async create(req, res) {
        try {

            const {price, title, description, district, street, city, house_number, area, monthly_payment, bedrooms, suites, bathrooms, garages} = req.body

            const imovel = await prisma.imoveis.create({
                data: {
                    price: price,
                    title: title,
                    description: description,
                    district: district,
                    street: street,
                    city: city,
                    house_number: house_number,
                    area: area,
                    monthly_payment: monthly_payment,
                    bedrooms: bedrooms,
                    suites: suites,
                    bathrooms: bathrooms,
                    garages: garages
                }
            })
            
            return res.status(200).json(imovel)

        } catch (error) {
            return res.status(400).json({status:400, message: error.message})
        }
    },

    async update(req, res) {
        try {
            const imovelId = req.params.imovelId
            const currentImovel = await prisma.Imoveis.findUnique({ where: { id: imovelId } })
            
            const {price, title, description, district, street, city, house_number, area, monthly_payment, bedrooms, suites, bathrooms, garages} = req.body
            const imovel = await prisma.imoveis.update({
                where: {
                    id: imovelId
                },
                data: {
                    price: price || currentImovel.price ,
                    title: title || currentImovel.title,
                    description: description || currentImovel.description,
                    district: district || currentImovel.district,
                    street: street || currentImovel.street,
                    city: city || currentImovel.city,
                    house_number: house_number || currentImovel.house_number,
                    area: area || currentImovel.area,
                    monthly_payment: monthly_payment || currentImovel.monthly_payment,
                    bedrooms: bedrooms || currentImovel.bedrooms,
                    suites: suites || currentImovel.suites,
                    bathrooms: bathrooms || currentImovel.bathrooms,
                    garages: garages || currentImovel.garages
                }
            })

            return res.status(200).json(imovel)
            
        } catch (error) {
            return res.status(400).json({status:400, message: error.message})
        }
    },

    async delete(req, res) {
        try {
            const imovelId = req.params.imovelId

            const imovel = await prisma.imovel.delete({
                where: {
                    imovelId: imovelId
                }
            })
            
        } catch (error) {
            return res.status(400).json({status:400, message: error.message})
        }
    },

    async find(req, res) {
        try {

            const imovelId = req.params.imovelId

            const imovel = await prisma.imoveis.findUnique({where: {id: imovelId}})
            
            return res.status(200).json(imovel)
        } catch (error) {
            return res.status(400).json({status:400, message: error.message})
        }
    },

    async findALL(req, res) {
        try {

            const imoveis = await prisma.imoveis.findMany()

            return res.status(200).json(imoveis)
            
        } catch (error) {
            return res.status(400).json({status:400, message: error.message})
        }
    },

}