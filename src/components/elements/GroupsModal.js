import { useEffect } from 'react'
import { MdClose } from 'react-icons/md'
import { ImWhatsapp } from 'react-icons/im'

import {
    Box,
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    Typography,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
} from '@mui/material'

const GroupsModal = ({ open, setOpen, group }) => {
    const handleClose = () => {
        setOpen && setOpen(false)
    }

    // useEffect(() => {
    //     document.body.style.overflowY = isOpen ? 'hidden' : 'auto'
    // }, [isOpen])
    return (
        <Dialog onClose={handleClose} open={open}>
            <DialogTitle>Faça parte dos nossos grupos!</DialogTitle>
            <DialogContent>
                {group && (
                    <Box>
                        <DialogContentText id="alert-dialog-description">
                            Abaixo você encontrará o grupo da sua região, clique
                            e faça parte:
                        </DialogContentText>
                        <Box>
                            <Box>
                                <ImWhatsapp />
                                <Typography>{group.name}</Typography>
                            </Box>
                            <Button
                                variant="contained"
                                color="neutral"
                                href={group.link}
                                target="_blank"
                                rel="noreferrer"
                            >
                                Entrar
                            </Button>
                        </Box>
                    </Box>
                )}
                <Box>
                    <DialogContentText id="alert-dialog-description">
                        Ou se associe ao nosso grupo Aliança Rebelde e receba
                        notícias diretamente da campanha:
                    </DialogContentText>
                    <Box>
                        <Box>
                            <ImWhatsapp />
                            <Typography>Aliança Rebelde</Typography>
                        </Box>
                        <Button
                            variant="contained"
                            color="neutral"
                            href="https://growp.app/i/n8uwd"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Entrar
                        </Button>
                    </Box>
                </Box>
            </DialogContent>
        </Dialog>
    )
    // return !isOpen ? null : (
    // <S.ModalContainer>
    //     <S.Modal>
    //         <S.CloseBtn onClick={handleClose}>
    //             <MdClose />
    //         </S.CloseBtn>
    //         <S.Title>Faça parte dos nossos grupos!</S.Title>
    //         {group && (
    //             <S.Content>
    //                 <S.Description>
    //                     Abaixo você encontrará o grupo da sua região, clique
    //                     e faça parte:
    //                 </S.Description>
    //                 <S.Item>
    //                     <div>
    //                         <ImWhatsapp />
    //                         <span>{group.name}</span>
    //                     </div>
    //                     <a
    //                         href={group.link}
    //                         target="_blank"
    //                         rel="noreferrer"
    //                     >
    //                         ENTRAR
    //                     </a>
    //                 </S.Item>
    //             </S.Content>
    //         )}

    //         <S.Content>
    //             <S.Description>
    //                 ou se associe ao nosso grupo Aliança Rebelde e receba
    //                 notícias diretamente da campanha:
    //             </S.Description>
    //             <S.Item>
    //                 <div>
    //                     <ImWhatsapp />
    //                     <span>Aliança Rebelde</span>
    //                 </div>
    //                 <a
    //                     href="https://growp.app/i/n8uwd"
    //                     target="_blank"
    //                     rel="noreferrer"
    //                 >
    //                     ENTRAR
    //                 </a>
    //             </S.Item>
    //         </S.Content>
    //     </S.Modal>
    // </S.ModalContainer>
    // )
}

export { GroupsModal }
