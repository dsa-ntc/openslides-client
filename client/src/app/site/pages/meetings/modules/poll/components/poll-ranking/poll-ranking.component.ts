import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, ViewChild } from '@angular/core';
import { PollData } from 'src/app/domain/models/poll';
import { SortingListComponent } from 'src/app/ui/modules/sorting/modules/sorting-list/components/sorting-list/sorting-list.component';
import { ViewOption } from '../../../../pages/polls';

@Component({
    selector: `os-poll-ranking`,
    templateUrl: `./poll-ranking.component.html`,
    styleUrls: [`./poll-ranking.component.scss`],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class PollRankingComponent {

    @ViewChild(SortingListComponent)
    public listElement!: SortingListComponent;

    public _poll: PollData;
    public _availableCandidates: ViewOption[];
    public _rankedCandidates: ViewOption[];
    
    @Input()
    public set poll(pollData: PollData) {
        this._poll = pollData;
    }

    public get poll(): PollData {
        return this._poll;
    }

    @Input()
    public set availableCandidates(a: ViewOption[]) {
        console.log('1');
        this._availableCandidates = a;
    }

    public get availableCandidates(): ViewOption[] {
        console.log('2');
        return this._availableCandidates;
    }

    @Input()
    public set rankedCandidates(a: ViewOption[]) {
        console.log('3');
        this._rankedCandidates = a;
    }

    public get rankedCandidates(): ViewOption[] {
        console.log('4', this._rankedCandidates);
        return this._rankedCandidates;
    }

    @Input()
    public removeFromRanking!: (candidate: ViewOption) => void;

    public callRemoveFromRanking(candidate: ViewOption) {
        console.log('callremovefromrankings');
        this.removeFromRanking(candidate);
    }

    public constructor(private cd: ChangeDetectorRef) {}

    public onSortingChanged(sortedCandidates: ViewOption[]): void {
        console.log('5');
        return;
    }

    // public removeFromRanking(candidate: ViewOption): void {
    //     this._rankedCandidates = this.rankedCandidates.filter(c => c.id !== candidate.id);
    //     this._availableCandidates = [...this.availableCandidates, candidate];
    // }
    
    public addToRanking(candidate: ViewOption): void {
        this._availableCandidates = this.availableCandidates.filter(c => c.id !== candidate.id);
        this._rankedCandidates = [...this.rankedCandidates, candidate];
    }
}
