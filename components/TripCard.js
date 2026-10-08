
import { format, parseISO } from "date-fns";
import { /* TODO : la locale française */ } from "date-fns/locale";
export default function TripCard({ trip }) {
    // TODO ci-dessous : construire une chaine de la forme "2026-09-15T08:00" à partir de trip.date (qui vaut par exemple 2026-09-15) et trip.time (par ex 08:00)
    const departure = parseISO("2026-09-15T08:00");
    const dateLabel = format(departure, "EEEE d MMMM 'à' HH'h'mm", {locale: departure});
    return (
        <Pressable onPress={() => console.log("Trajet sélectionné : " + trip.departure + " → " + trip.arrival)}
            style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}>

            <View style={styles.card}>
                {trip.seatsAvailable == 1 && (
                    <View style={styles.badge}>
                        <Text style={styles.badgeText}>Dernières places</Text>
                    </View>
                )}

                <View style={styles.row}>
                    <Text style={styles.route}>
                        {trip.departure} → {trip.arrival}
                    </Text>
                    <Text style={styles.price}>{trip.price} €</Text>
                </View>
                <Text>{trip.date}-{trip.time}</Text>
                <Text>{dateLabel}</Text>
                <Text>Nombre de place: {trip.seatsAvailable}</Text>
                <Text>Conducteur: {trip.driver.name}</Text>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "white",
        borderRadius: 12,
        padding: 16,
        shadowColor: "#000000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 3, // pour Android
    },
    row: {
        flex: 1,
        flexDirection: "row"
    },
    route: {
        fontSize: 18,
        fontWeight: 600,
        color: "#161B33",
        marginTop: 8
    },
    price: {
        fontSize: 8,
        fontWeight: "bold",
        color: "#3ED9C4"
    },
    cardPressed: {
        opacity: 0.5,
    },
    badge: {
        alignSelf: "flex-start",
        backgroundColor: "#FF7A59",
        borderRadius: 6,
        paddingVertical: 4,
        paddingHorizontal: 8,
        marginTop: 8,
    },
    badgeText: {
        color: "#FFFFFF",
        fontSize: 12,
        fontWeight: "bold",
    },

})