import { Image, StyleSheet } from "react-native";

interface TypeProps {
  id: number;
}

const TypeImage: React.FC<TypeProps> = ( {id} ) => {
  switch (id) {
    case 1:
      return (
        <Image
          source={require('../Assets/Icons/Pokemon_Type_Icon_Normal.png')}
          style={styles.typeIcon}
        />
      );
    case 2:
      return (
        <Image
          source={require('../Assets/Icons/Pokemon_Type_Icon_Fighting.png')}
          style={styles.typeIcon}
        />
      );
    case 3:
      return (
        <Image
          source={require('../Assets/Icons/Pokemon_Type_Icon_Flying.png')}
          style={styles.typeIcon}
        />
      );
    case 4:
      return (
        <Image
          source={require('../Assets/Icons/Pokemon_Type_Icon_Poison.png')}
          style={styles.typeIcon}
        />
      );
    case 5:
      return (
        <Image
          source={require('../Assets/Icons/Pokemon_Type_Icon_Ground.png')}
          style={styles.typeIcon}
        />
      );
    case 6:
      return (
        <Image
          source={require('../Assets/Icons/Pokemon_Type_Icon_Rock.png')}
          style={styles.typeIcon}
        />
      );
    case 7:
      return (
        <Image
          source={require('../Assets/Icons/Pokemon_Type_Icon_Bug.png')}
          style={styles.typeIcon}
        />
      );
    case 8:
      return (
        <Image
          source={require('../Assets/Icons/Pokemon_Type_Icon_Ghost.png')}
          style={styles.typeIcon}
        />
      );
    case 9:
      return (
        <Image
          source={require('../Assets/Icons/Pokemon_Type_Icon_Steel.png')}
          style={styles.typeIcon}
        />
      );
    case 10:
      return (
        <Image
          source={require('../Assets/Icons/Pokemon_Type_Icon_Fire.png')}
          style={styles.typeIcon}
        />
      );
    case 11:
      return (
        <Image
          source={require('../Assets/Icons/Pokemon_Type_Icon_Water.png')}
          style={styles.typeIcon}
        />
      );
    case 12:
      return (
        <Image
          source={require('../Assets/Icons/Pokemon_Type_Icon_Grass.png')}
          style={styles.typeIcon}
        />
      );
    case 13:
      return (
        <Image
          source={require('../Assets/Icons/Pokemon_Type_Icon_Electric.png')}
          style={styles.typeIcon}
        />
      );
    case 14:
      return (
        <Image
          source={require('../Assets/Icons/Pokemon_Type_Icon_Psychic.png')}
          style={styles.typeIcon}
        />
      );
    case 15:
      return (
        <Image
          source={require('../Assets/Icons/Pokemon_Type_Icon_Ice.png')}
          style={styles.typeIcon}
        />
      );
    case 16:
      return (
        <Image
          source={require('../Assets/Icons/Pokemon_Type_Icon_Dragon.png')}
          style={styles.typeIcon}
        />
      );
    case 17:
      return (
        <Image
          source={require('../Assets/Icons/Pokemon_Type_Icon_Dark.png')}
          style={styles.typeIcon}
        />
      );
    case 18:
      return (
        <Image
          source={require('../Assets/Icons/Pokemon_Type_Icon_Fairy.png')}
          style={styles.typeIcon}
        />
      );
    default:
      return (
        <Image
          source={require('../Assets/Icons/Pokemon_Type_Icon_Normal.png')}
          style={styles.typeIcon}
        />
      );
  }
}

const styles = StyleSheet.create({
  typeIcon: {
    width: 20,
    height: 20,
    marginRight: 6
  }
});

export default TypeImage;
