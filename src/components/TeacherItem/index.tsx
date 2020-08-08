import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './styles';
import { RectButton } from 'react-native-gesture-handler';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

function TeacherItem() {

    return (

        <View style={styles.container} >

            <View style={styles.profile}>

                <Image 
                    
                    style={styles.avatar}
                    source={{ uri: 'https://avatars1.githubusercontent.com/u/5264225?s=460&u=bcb30a610e8d9b852599ea025770f4534e7b458d&v=4' }}
                />
                
                <View style={styles.profileInfo}>
                
                    <Text style={styles.name}>Lupércio Ferraz</Text>
                    <Text style={styles.subject}>Computação</Text>

                </View>

            </View>

            <Text style={styles.bio}>

                Bacharel em Ciência da Computação formado pela Universidade de São Paulo. 
                
                {'\n'}{'\n'}

                Programador Java Web com muitos anos de experiência em grandes projetos.

            </Text>

            <View style={styles.footer}>

                <Text style={styles.price}>

                    Preço/Hora {'   '}
                    <Text style={styles.priceValue}>R$ 20,00</Text>

                </Text>

                <View style={styles.buttonContainer}>

                    <RectButton style={[styles.favoriteButton, styles.favorited]}>

                        {/*<Image source={heartOutlineIcon} />*/}
                        <Image source={unfavoriteIcon} />

                    </RectButton>

                    <RectButton style={styles.contactButton}>

                        <Image source={whatsappIcon} />
                        <Text style={styles.contactButtonText}>Entrar em contato</Text> 

                    </RectButton>

                </View>

            </View>

        </View>    

    );

}

export default TeacherItem;