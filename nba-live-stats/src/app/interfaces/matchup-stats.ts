export interface MatchupStats {
    gameStatusText: string;

    homeScore: number;
    homeInBonus: string;
    homeTimeoutsRemaining: number;
    homeTeamAssists: number;
    homeTeamRebounds: number;
    homeTeamOffensiveRebounds: number;
    homeTeamDefensiveRebounds: number;
    homeTeamTurnovers: number;

    awayScore: number;
    awayInBonus: string;
    awayTimeoutsRemaining: number;
    awayTeamAssists: number;
    awayTeamRebounds: number;
    awayTeamOffensiveRebounds: number;
    awayTeamDefensiveRebounds: number;
    awayTeamTurnovers: number;
}
