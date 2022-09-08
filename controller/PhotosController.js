import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

module.exports = {
    async create(req, res) {
        try {

            const {imovelId, codepic} = req.body

            const photo = await prisma.photos.create({
                data: {
                    idimovel: imovelId,
                    codepic: codepic
                }
            })
            
            return res.status(200).json(photo)

        } catch (error) {
            return res.status(400).json({status:400, message: error.message})
        }
    },

    async createAll(req, res) {
        try {

            const createdPhotos = req.body

            const photos = await prisma.photos.createMany({
                data: createdPhotos
            })
            
            return res.status(200).json(photos)
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

    async findALL(req, res) {
        try {

            const imovelId = req.params.imovelId

            const imoveis = await prisma.imoveis.findMany({where: {idimovel: imovelId}})

            return res.status(200).json(imoveis)
            
        } catch (error) {
            return res.status(400).json({status:400, message: error.message})
        }
    },
}